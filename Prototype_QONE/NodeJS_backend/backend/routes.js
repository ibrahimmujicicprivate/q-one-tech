import express from 'express'
import { createOrUpdate, deleteProjectById, getProjectById, readAllProjects } from './db.js'

const router = express.Router()

// READ ALL projects
router.get('/projects', async(req, res) => {
    const { success, data } = await readAllProjects()

    if(success){
        return res.json({success, data})
    }
    return res.status(500).json({success:false, messsage: "Error"})
})

// Get project by ID
router.get('/project/:id', async(req, res) => {
    const { id } = req.params
    const { success, data } = await getProjectById(id)
    console.log(data)
    if(success){
        return res.json({success, data})
    }

    return res.status(500).json({success: false, message: "Error"})
})


// Create project
router.post('/project', async(req, res) => {
    const { success, data } = await createOrUpdate(req.body)

    if(success){
        return res.json({success, data})
    }

    return res.status(500).json({success: false, message: 'Error'})
})


// Update project by ID
router.put('/project/:id', async(req, res) => {
    const project = req.body
    project.globalId = req.params.id

    const { success, data } = await createOrUpdate(project)

    if(success){
        return res.json({success, data})
    }

    return res.status(500).json({success: false, message: "Error"})
})


// Delete project by Id
router.delete('/project/:id', async (req, res) => {
    const { id } = req.params
    const { success, data } = await deleteProjectById(id)
    if (success) {
      return res.json({ success, data })
    }
    return res.status(500).json({ success: false, message: 'Error'})
})
  



export default router