const Product = require('../models/product');
exports.addProduct = async (req, res) => {
    try {
        let productData = req.body;
        let productObj = new Product(productData);
        productData = await productObj.save();
        res.status(200).json(productData);

    }
    catch (err) {

        console.log(err);
    }

}
exports.getAllProducts = async (req, res) => {
    try {

        const products = await Product.find();
        res.status(200).json(products);
    }
    catch (err) {
        res.status(400).json({ 'msg': `error ${err.message}` });
    }
}
exports.getProductByTitle = async (req, res) => {
    try {
        let pTitle = req.params.title;
        const productTitle = await Product.findOne({ 'title': pTitle });
        res.status(200).json(productTitle);

    }
    catch (err) {

        res.status(400).json({ "msg": `error found in ${err}` });
    }
}
exports.getProductByCategory = async (req, res) => {
    try {
        let pCate = req.params.category;
        let productCategory = await Product.findOne({ 'category': pCate });
        res.status(200).json(productCategory);

    }
    catch (err) {
        res.status(400).json({ "msg": `error in ${err}` })

    }
}
exports.deleteProductById = async (req, res) => {
    try {
        //take the id of the record u wish to delete
        let id = req.params.id;
        //ensure that record exists before u delete....
        const course = await Product.findOne({ '_id': id });
        if (!course)
            res.status(400).json({ 'msg': `Invalid ID: ${id}` })
        else {
            await Product.deleteOne({ '_id': id });
            res.status(200).json({ 'msg': `course record deleted ${_id}` });

        }
    }
    catch (err) {
        res.status(400).json({ 'msg': `error in api : ${err}` })
    }

}
exports.updateProduct = async (req, res) => {
    try {
        let id = req.params.id;
        let newCourseObj = req.body;
        let updatedCourse = await Product.findByIdAndUpdate(id, newCourseObj);//{,new:true}
        if (!updatedCourse) {
            res.status(400).json({ 'msg': `Invalid ID: ${id}` });

        }
        else {
            res.status(200).json({ 'msg': 'Course record updated!' });
        }
    }
    catch (err) {
        res.status(400).json({ 'msg': `error in api: ${err.message}` })
    }


}