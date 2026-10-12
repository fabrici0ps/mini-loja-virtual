import { useEffect, useState, useRef } from 'react'
import { Button } from 'primereact/button'
import { Toast } from 'primereact/toast'
import ProductCard from './ProductCard'
import ProductForm from './ProductForm'
import { api } from '../services'

const ProductList = () => {
    const [products, setProducts] = useState([])
    const [isModalVisible, setModalIsVisible] = useState(false)
    const toast = useRef(null)

    async function getProducts() {
        const result = await api.get('products')
        setProducts(result.data)
    }

    async function addProduct(newProduct) {
        setProducts([newProduct, ...products])
        
        toast.current.show({
            severity: 'success',
            summary: 'Sucesso!',
            detail: 'Produto adicionado com sucesso!',
            life: 1500
        })
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <section className='overflow-hidden px-5'>
            <Toast ref={toast} position='bottom-right' />
            <div className='flex justify-content-between align-content-center my-4'>
                <span className='font-bold text-4xl'>Lista de Produtos</span>
                <Button icon='pi pi-plus' onClick={() => setModalIsVisible(true)} size='small' label='Adicionar produto' />
            </div>
            <ul className='grid list-none p-0'>
                {products.map(product => (
                    <li key={product.id} className='col-12 md:col-3'>
                        <ProductCard data={product} />
                    </li>
                ))}
            </ul>
            <ProductForm 
                visible={isModalVisible}
                onHide={() => setModalIsVisible(false)}
                onSave={addProduct}
                lenProducts={products.length}
            />
        </section>
    );
}
 
export default ProductList;