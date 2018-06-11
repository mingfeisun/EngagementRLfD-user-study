import pandas as pd
from pandas.io.json import json_normalize
import json
import os

path  = os.getcwd() + '\data' + '\\valid'
index =  ['uid', 'age', 'gender', 'experience']
count = 0
total_list = []
for filename in os.listdir(path):
        medium_list = []
        root, ext = os.path.splitext(filename)
        if ext == '.json':
            infile = open(path + '\\'+ filename, 'r')
            tmp_frame = json.load(infile)
            medium_list.append(tmp_frame['uid'])
            medium_list.append(tmp_frame['info'][0]['value'])
            medium_list.append(tmp_frame['info'][1]['value'])
            medium_list.append(tmp_frame['info'][2]['value'])
            medium_dic = {}
            for i in range(len(tmp_frame['mode'])):
                tmp_list = []
                tem_str = 'mode' +str(tmp_frame['mode'][i])
                tem_man = 'man_' +str(i +1)
                tem_rating = 'q' +str(i +1) +'_rating'
                tmp_list.append(tmp_frame['sport'][i])
                tmp_list.append(int(tmp_frame[tem_man][0]['value']))
                tmp_list.append(int(tmp_frame[tem_rating][0]['value']))
                tmp_list.append(int(tmp_frame[tem_rating][1]['value']))
                tmp_list.append(int(tmp_frame[tem_rating][2]['value']))
                tmp_list.append(int(tmp_frame[tem_rating][3]['value']))
                tmp_list.append(tmp_frame[tem_rating][4]['value'])
                tmp_list.append(int(tmp_frame[tem_rating][5]['value']))
                tmp_list.append(int(tmp_frame[tem_rating][6]['value']))
                tmp_list.append(int(tmp_frame[tem_rating][7]['value']))
                tmp_list.append(tmp_frame[tem_rating][8]['value'])
                medium_dic[str(tmp_frame['mode'][i])] = tmp_list
                if count==0:
                    index.append('mode' + str(i + 1) +'_sport')
                    index.append('mode' + str(i + 1) +'_test')
                    index.append('mode' + str(i + 1) +'_attention')
                    index.append('mode' + str(i + 1) +'_mimic')
                    index.append('mode' + str(i + 1) +'_engagement')
                    index.append('mode' + str(i + 1) +'_master')
                    index.append('mode' + str(i + 1) +'_why')
                    index.append('mode' + str(i + 1) +'_acceptable')
                    index.append('mode' + str(i + 1) +'_intelligence')
                    index.append('mode' + str(i + 1) +'_demonstration')
                    index.append('mode' + str(i + 1) +'_comments')
            for i in range(len(tmp_frame['mode'])):
                # print(medium_dic[str(i + 1)])
                for j in range(len(medium_dic[str(i + 1)])):
                    medium_list.append(medium_dic[str(i + 1)][j])
            count += 1
            total_list.append(medium_list)
# print(index)
frame = pd.DataFrame(total_list, columns = index)
frame.to_csv('data/result.csv', index=False)