import boto3
from uuid import uuid4
from botocore.exceptions import ClientError, ParamValidationError

s3 = boto3.client('s3')
ddb = boto3.client('dynamodb')

def handler(event, context):
  print('Received S3 event:' + str(event))
  bucket = event['Records'][0]['s3']['bucket']['name']
  key = event['Records'][0]['s3']['object']['key']
  print(bucket + '\n' + key)

  # get S3 object URL
  def get_object_url(bucket, key):
    url = s3.generate_presigned_url(
      'get_object',
      Params = {'Bucket': bucket, 'Key': key},
      ExpiresIn = 3600000
    )
    print (url)
    return (url)

  # put URL to Documents table in DDB
  def put_to_ddb(url):
    response = ddb.put_item(
      TableName = 'Documents-e53kapz2hbd27mufmz77hzu3xq-staging',
      Item = {
        "id":{"S":str(uuid4())},
        "s3url":{"S": str(url)},
        "docuemntName": {"S": str(key)}
      }
    )
    print(response)

  def main(bucket, key):
    url = get_object_url(bucket, key)
    put_to_ddb(url)

  try:
    main(bucket, key)
  except ClientError as error:
    print(error)
  except ParamValidationError as error:
    print(error)
