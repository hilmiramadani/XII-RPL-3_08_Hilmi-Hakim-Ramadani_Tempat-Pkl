const User = require('../models/TempatPkl')

module.exports = {
    // get all users
    index: async (req, res) => {
        try {
            const perusahaans = await User.find()
            if (perusahaans.length > 0) {
                res.status(200).json({
                    status: true,
                    data: perusahaans,
                    method: req.method,
                    url: req.url
                })
            } else {
                res.json({
                    status: false,
                    message: "Data masih kosong"
                })
            }
        } catch (error) {
            res.status(400).json({ sucess: false })
        }

    },
    // get a user
    show: async (req, res) => {
        try {
            const perusahaan = await User.findById(req.params.id)
            res.json({
                status: true,
                data: perusahaan,
                method: req.method,
                url: req.url,
                message: "Data berhasil didapat!"
            })
        } catch (error) {
            res.status(400).json({ sucess: false })
        }
    },
    store: async (req, res) => {
        try {
            const perusahaan = await User.create(req.body)
            res.status(200).json({
                status: true,
                data: perusahaan,
                method: req.method,
                url: req.url,
                message: "Data berhasil ditambahkan!"
            })
        } catch (error) {

        }
        // users.push(req.body)

    },
    update: async (req, res) => {
        try {
            const perusahaan = await User.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true
            })
            res.json({
                status: true,
                data: perusahaans,
                method: req.method,
                url: req.url,
                message: "Data berhasil diubah!"
            })
        } catch (error) {
            res.status(400).json({ sucess: false })
        }
        // const id = req.params.id


    },
    delete: async (req, res) => {
        try {
            await User.findByIdAndDelete(req.params.id)
            res.json({
                status: true,
                method: req.method,
                url: req.url,
                message: "Data berhasil dihapus!"
            })
        } catch (error) {
            res.status(400).json({ sucess: false })
        }
    }
}