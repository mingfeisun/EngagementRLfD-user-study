import json
import csv
import pandas as pd
from pandas.io.json import json_normalize
import os

frame = pd.DataFrame()
for filename in os.listdir('D:\HKUST\Projects\2018\HRI\eng-user-study\data'):
    # print(os.listdir(os.getcwd()))
    # print(filename)
    # print(os.path.splitext(filename))
    try:
        print("ok")
        root, ext == os.path.splitext(filename)
        print(root)
        print(ext)
        if ext == '.json':
            print("ok")
            tmp_frame = pd.read_json(filename)
            print(tmp_frame)
            frame = frame.append(tmp_frame, ignore_index=True)
            print(frame)
    except BaseException:
        pass
    # print(os.path.splitext(filename))
frame.to_csv('output.csv', index = False)



# infile = open('2018-05-20-12-45-55-b8541c3b-37a1-48c0-be49-f54b1756fb17-mingfei - Copy.json', 'r')
# outfile = open('result.csv','w')
#
# writer = csv.writer(outfile)
# data = json.loads(infile.read())
#
# print(data)
# for row in data:
#     print(row)
#     writer.writerow(row)



# with open('2018-05-20-12-45-55-b8541c3b-37a1-48c0-be49-f54b1756fb17-mingfei - Copy.json') as data_file:
#     data = json.load(data_file)
#
# df = json_normalize(data, 'results')
# print (df)
# data.to_csv("output.csv", index=False, sep='\t', encoding="utf-8")
