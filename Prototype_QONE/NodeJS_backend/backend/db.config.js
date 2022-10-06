import  AWS from 'aws-sdk'

AWS.config.update({
    region: "local",
    accessKeyId: "ibrahim",
    secretAccessKey: "mujicic",
    endpoint: "http://localhost:8000"
})

const db = new AWS.DynamoDB.DocumentClient()

const Table = 'project'

export {
    db,
    Table
}