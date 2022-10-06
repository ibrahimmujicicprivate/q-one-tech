import boto3
import json
from boto3.dynamodb.conditions import Key

f = open('dataForDynamo.json')
data = json.load(f)
def main():
    # 1 - Create Client
    ddb = boto3.resource('dynamodb',
                         endpoint_url='http://localhost:8000',
                         region_name='local',
                         aws_access_key_id='ibrahim',
                         aws_secret_access_key='mujicic')
    # 2 - Create the Table

    # ddb.create_table(TableName='project',
    #                  AttributeDefinitions=[
    #                      {
    #                          'AttributeName': 'globalId',
    #                          'AttributeType': 'S'
    #                      }
    #                  ],
    #                  KeySchema=[
    #                      {
    #                          'AttributeName': 'globalId',
    #                          'KeyType': 'HASH'
    #                      }
    #                  ],
    #                  ProvisionedThroughput= {
    #                      'ReadCapacityUnits': 10,
    #                      'WriteCapacityUnits': 10
    #                  }
    #                  )
    # print('Successfully created Table')

   

    table = ddb.Table('project')

    input = data

    # #3 - Insert Data
    table.put_item(Item=input)
    print('Successfully put item')

    #4 - Scan Table
    scanResponse2 = table.scan(TableName='project')

    items = scanResponse2['Items']
    print(table.name)
    for item in items:
        print(item)



main()