import pandas as pd
df = pd.read_html('https://fbref.com/en/comps/12/La-Liga-Stats')
# for idx,table in enumerate(df):
#     print("***************************")
#     print(idx)
#     print(table)
print(df[0])

