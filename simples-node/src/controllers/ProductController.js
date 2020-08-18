const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
    async index(req, res){
        /**
         * Primeiro parametro eu posso montar algum filtro para o find, nesse meu caso eu vou passar vazio pois eu não quero um filtro
         * o segundo é a pagina default e o limt de itens por página 
         */
        const { page = 1} = req.query; //paremetro para o get
        const products = await Product.paginate({ }, { page, limit: 10 });
        
        return res.json(products);
    },

    async show(req, res){
        const products = await Product.findById(req.params.id);
        
        return res.json(products);
    },

    async store(req, res){
        const product = await Product.create(req.body);

        return res.json(product);
    },
    
    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(product);
    },

    async destroy(req, res){
        await Product.findByIdAndRemove(req.params.id);

        return res.send()
    }
}