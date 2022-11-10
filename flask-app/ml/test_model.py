import numpy as np
import pandas as pd
import tensorflow as tf
from tensorflow.keras import layers, losses
from tensorflow.keras.datasets import fashion_mnist
from tensorflow.keras.models import Model
def cheeeck(id):

  df = pd.read_csv('D:/FinWinProject/flask-app/ml/test_'+ str(id) + ".csv")
  new_rent = df.loc[:, df.columns != 'uniq_date']
  X_train = new_rent.loc[:, 'year':'dayofweek'][:-1] 

  X_test = new_rent.loc[:,'year':'dayofweek'][-1:] 

  y_train = new_rent.loc[:, 'dayofweek':][:-1] 
  y_test = new_rent.loc[:, 'dayofweek':][-1:]
  y_train = y_train.loc[:, y_train.columns!='dayofweek']
  y_test = y_test.loc[:, y_test.columns!='dayofweek']
  seq_in = X_train.to_numpy()
  seq_in = seq_in.reshape(X_train.shape[0], 1, 4)
  seq_out = y_train.to_numpy()
  seq_out = seq_out.reshape(X_train.shape[0], 1, y_train.shape[1])
  print(y_test.shape)
  class Coder(Model):
    def __init__(self, input_dim, out_dim):
      super(Coder, self).__init__()
      self.input_dim = input_dim   
      self.out_dim = out_dim
      self.encoder = tf.keras.Sequential([
        layers.Flatten(),
        layers.Dense(self.input_dim, activation='relu'),
        layers.Dense(4, activation='relu'),
        layers.Dense(8, activation='relu'),
        layers.Dense(16, activation='relu')
      ])
      self.decoder = tf.keras.Sequential([
        layers.Dense(32, activation='relu'),
        layers.Dense(64, activation='relu'),
        layers.Dense(self.out_dim, activation='relu'),
        layers.Dense(self.out_dim, activation='sigmoid'),
        layers.Reshape((1, self.out_dim))
      ])
    def call(self, x):
      encoded = self.encoder(x)
      decoded = self.decoder(encoded)
      return decoded

  user_to_params = {
      351715: 
      ["var2.ckpt", 1289, np.array([[[2021,    3,   22,    0]]]),],
      265865: 
      ["var1.ckpt", 71, np.array([[[2021,    3,   23,    1]]])]
      }

  model = Coder(4, y_test.shape[1])
  model.load_weights('D:/FinWinProject/flask-app/ml/var_' + str(id)+".ckpt")
  yhat = model.predict(X_test)
  yhat = yhat[0][0]
  print(yhat)
  print("Top:")
  print(np.argpartition(yhat, -5)[-5:])

  ids = list(np.argpartition(yhat, -5)[-5:])
  numbers = []
  for i in ids:
    numbers.append(list(y_test.columns)[i]) #y_test - это названия колонок
  return numbers

  print(pred(351715))