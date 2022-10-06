import {db, Table} from './db.config.js'

// Create or Update projects
const createOrUpdate = async (data = {}) =>{

    if(!data.globalId) {
        data.globalId = Math.floor(Math.random() * 100).toString();
    }
    const params = {
        TableName: Table,
        Item: data
    }

    

    try{
        await db.put(params).promise()
        return { success: true }
    } catch(error){
        return { success: false}
    }
}

// Read all projects
const readAllProjects = async()=>{
    const params = {
        TableName: Table
    }

    try{
        const { Items = [] } = await db.scan(params).promise()
        return { success: true, data: Items }

    } catch(error){
        return { success: false, data: null }
    }

}

// Read projects by ID
const getProjectById = async (value, key = 'id') => {
    const params = {
        TableName: Table,
        Key: {
            [key]: parseInt(value)
        }
    }
    try {
        const { Item = {} } =  await db.get(params).promise()
        return { success: true, data: Item }
    } catch (error) {
        return {  success: false, data: null}        
    }
}

// Delete project by ID
const deleteProjectById = async(value, key = 'globalId' ) => { 
    const params = {
        TableName: Table,
        Key: {
            [key]: value
        }
    }
        
    try {
        await db.delete(params).promise()
        return {  success: true }

    } catch (error) {
        return{ success: false }
    }
}


export {
    createOrUpdate,
    readAllProjects,
    getProjectById,
    deleteProjectById
}