import { useForm } from 'react-hook-form'
import { Dialog } from 'primereact/dialog'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { FloatLabel } from 'primereact/floatlabel'

const ProductForm = ({ visible, onHide, onSave, lenProducts }) => {
    const { register, handleSubmit, reset } = useForm()

    function onSubmit(data) {
        const product = {
            id: lenProducts + 1,
            title: data.title,
            price: Number(data.price),
            category: data.category,
            image: data.image,
            rating: { rate: 5.0 }
        }
        onSave(product)
        onHide()
        reset()
    }

    return (
        <Dialog className='w-3' header="Novo Produto" visible={visible} onHide={onHide}>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-column gap-4 pt-5'>
                <FloatLabel>
                    <InputText className='w-full' id='title' {...register('title', {required: true})} />
                    <label htmlFor="title">Título</label>
                </FloatLabel>
                <FloatLabel>
                    <InputText className='w-full' id='price' {...register('price', {required: true})} />
                    <label htmlFor="price">Preço</label>
                </FloatLabel>
                <FloatLabel>
                    <InputText className='w-full' id='category' {...register('category', {required: true})} />
                    <label htmlFor="category">Categoria</label>
                </FloatLabel>
                <FloatLabel>
                    <InputText className='w-full' type='url' id='image' {...register('image', {required: true})} />
                    <label htmlFor="image">Imagem</label>
                </FloatLabel>
                <Button className='mt-2' type='submit' label='Adicionar Produto' />
            </form>
        </Dialog>
    );
}
 
export default ProductForm;