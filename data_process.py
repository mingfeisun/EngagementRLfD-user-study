import pandas as pd
from pandas.io.json import json_normalize
import json
import os
# Version 1

# frame = pd.DataFrame()
# for filename in os.listdir(os.getcwd()):
# root, ext = os.path.splitext(filename)
# if ext == '.json':
# infile = open(filename, 'r')
# tmp_frame = json.load(infile)
# tmp_dic = {'uid':{'uid':tmp_frame['uid']}, 'info':{'age':tmp_frame['info'][0]['value'], 'gender':tmp_frame['info'][1]['value'], 'experience':tmp_frame['info'][2]['value']}}
# for i in range(len(tmp_frame['mode'])):
# tem_str = 'mode' +str(tmp_frame['mode'][i])
# tem_man = 'man_' +str(i+1)
# tem_rating = 'q' +str(i+1) +'_rating'
# tem_overall = 'q' +str(i+1) +'_overall'
# tmp_dic [tem_str] = {'sport':tmp_frame['sport'][i], 'test':int(tmp_frame[tem_man][0]['value']), \
# 'engagement':int(tmp_frame[tem_rating][0]['value']), \
# 'learning':int(tmp_frame[tem_rating][1]['value']), \
# 'terminate':int(tmp_frame[tem_rating][2]['value']), \
# 'master':int(tmp_frame[tem_rating][3]['value']), \
# 'outcome':int(tmp_frame[tem_overall][0]['value']), \
# 'confidence':int(tmp_frame[tem_overall][1]['value']), \
# 'why': tmp_frame[tem_overall][2]['value']}
# print(tmp_dic)
# frame = frame.append(tmp_dic, ignore_index=True)
# # print(frame)
# frame.to_csv('output.csv', index = False)

# infile = open('2018-05-20-12-45-55-b8541c3b-37a1-48c0-be49-f54b1756fb17-mingfei - Copy.json', 'r')
# outfile = open('result.csv','w')
#
# writer = csv.writer(outfile)
# data = json.loads(infile.read())
#
# print(data)
# for row in data:
# print(row)
# writer.writerow(row)
# Version 2
# frame = pd.DataFrame()
# for filename in os.listdir(os.getcwd()):
 # root, ext = os.path.splitext(filename)
 # if ext == '.json':
 # infile = open(filename, 'r')
 # tmp_frame = json.load(infile)
 # tmp_list = []
 # tmp_list.append(tmp_frame['uid'])
 # tmp_list.append(tmp_frame['info'][0]['value'])
 # tmp_list.append(tmp_frame['info'][1]['value'])
 # tmp_list.append(tmp_frame['info'][2]['value'])
 # # tmp_dic = {'uid':{'uid':tmp_frame['uid']}, 'info':{'age':tmp_frame['info'][0]['value'], 'gender':tmp_frame['info'][1]['value'], 'experience':tmp_frame['info'][2]['value']}}
 # for i in range(len(tmp_frame['mode'])):
 # tem_str = 'mode' +str(tmp_frame['mode'][i])
 # tem_man = 'man_' +str(i+1)
 # tem_rating = 'q' +str(i+1) +'_rating'
 # tem_overall = 'q' +str(i+1) +'_overall'
 # tmp_list.append(tmp_frame['sport'][i])
 # tmp_list.append(int(tmp_frame[tem_man][0]['value']))
 # tmp_list.append(int(tmp_frame[tem_rating][0]['value']))
 # tmp_list.append(int(tmp_frame[tem_rating][1]['value']))
 # tmp_list.append(int(tmp_frame[tem_rating][2]['value']))
 # tmp_list.append(int(tmp_frame[tem_rating][3]['value']))
 # tmp_list.append(int(tmp_frame[tem_overall][0]['value']))
 # tmp_list.append(int(tmp_frame[tem_overall][1]['value']))
 # tmp_list.append(tmp_frame[tem_overall][2]['value'])
 # # tmp_dic [tem_str] = {'sport':tmp_frame['sport'][i], 'test':int(tmp_frame[tem_man][0]['value']), \
 # #                      'engagement':int(tmp_frame[tem_rating][0]['value']), \
 # #                      'learning':int(tmp_frame[tem_rating][1]['value']), \
 # #                      'terminate':int(tmp_frame[tem_rating][2]['value']), \
 # #                      'master':int(tmp_frame[tem_rating][3]['value']), \
 # #                      'outcome':int(tmp_frame[tem_overall][0]['value']), \
 # #                      'confidence':int(tmp_frame[tem_overall][1]['value']), \
 # #                      'why': tmp_frame[tem_overall][2]['value']}
 # # print(tmp_dic)
 # frame = frame.append(tmp_list, ignore_index=True)
 # # print(frame)
 # arrays = [['uid', 'info', 'info', 'info', \
 # 'mode1', 'mode1', 'mode1', 'mode1', 'mode1', 'mode1', 'mode1', 'mode1', 'mode1' \
 # 'mode2', 'mode2', 'mode2', 'mode2',
 # 'mode2', 'mode2', 'mode2', 'mode2', 'mode2' \
 # 'mode3', 'mode3', 'mode3', 'mode3', 'mode3', 'mode3', 'mode3', 'mode3',
 # 'mode3' \
 # 'mode4', 'mode4', 'mode4', 'mode4', 'mode4', 'mode4', 'mode4', 'mode4', 'mode4'],
 # ['uid', 'age', 'gender', 'experience', \
 # 'sport', 'test', 'engagement', 'learning', 'terminate', 'master', 'outcome', 'confidence', 'why', \
 # 'sport', 'test', 'engagement', 'learning', 'terminate', 'master', 'outcome', 'confidence', 'why',
 # 'sport', 'test', 'engagement', 'learning', 'terminate', 'master', 'outcome', 'confidence', 'why', \
 # 'sport', 'test', 'engagement', 'learning', 'terminate', 'master', 'outcome', 'confidence', 'why', \
 # ]]
 # tuples = list(zip(*arrays))
 # index = pd.MultiIndex.from_tuples(tuples, names=['first', 'second'])
 # # s = pd.Series(frame, index=index)
 # # print(s)
 # frame.to_csv('output2.csv', index = False)

 # with open('2018-05-20-12-45-55-b8541c3b-37a1-48c0-be49-f54b1756fb17-mingfei - Copy.json') as data_file:
 # data = json.load(data_file)
 #
 # df = json_normalize(data, 'results')
 # print (df)
# data.to_csv("output.csv", index=False, sep='\t', encoding="utf-8")
 # version 3
frame = pd.DataFrame()

for filename in os.listdir(os.getcwd()):
        root, ext = os.path.splitext(filename)
        if ext == '.json':
            infile = open(filename, 'r')
            tmp_frame = json.load(infile)
            tmp_dic = {'uid': tmp_frame['uid'], 'age': tmp_frame['info'][0]['value'],
                    'gender': tmp_frame['info'][1]['value'], 'experience': tmp_frame['info'][2]['value']}
            for i in range(len(tmp_frame['mode'])):
                tem_str = 'mode' +str(tmp_frame['mode'][i])
                tem_man = 'man_' +str(i +1)
                tem_rating = 'q' +str(i +1) +'_rating'
                tem_overall = 'q' +str(i +1) +'_overall'
                tmp_dic[tem_str +'sport'] = tmp_frame['sport'][i]
                tmp_dic[tem_str +'test'] = int(tmp_frame[tem_man][0]['value'])
                tmp_dic[tem_str +'engagement'] = int(tmp_frame[tem_rating][0]['value'])
                tmp_dic[tem_str +'learning'] = int(tmp_frame[tem_rating][1]['value'])
                tmp_dic[tem_str +'terminate'] = int(tmp_frame[tem_rating][2]['value'])
                tmp_dic[tem_str +'master'] = int(tmp_frame[tem_rating][3]['value'])
                tmp_dic[tem_str +'outcome'] = int(tmp_frame[tem_overall][0]['value'])
                tmp_dic[tem_str +'confidence'] = int(tmp_frame[tem_overall][1]['value'])
                tmp_dic[tem_str +'why'] = tmp_frame[tem_overall][2]['value']
            print(tmp_dic)
            frame = frame.append(tmp_dic, ignore_index=True)
 # print(frame)
frame.to_csv('result.csv', index=False)