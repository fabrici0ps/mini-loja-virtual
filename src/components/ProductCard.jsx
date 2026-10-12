import { Card } from 'primereact/card'
import { Image } from 'primereact/image'

const ProductCard = ({data}) => {
    const { 
        title, 
        description, 
        category, 
        image, 
        price, 
        rating 
    } = data
    
    return (
        <>
            <Card className='shadow-5 p-3'>
                <div className='relative'>
                    <Image src={image} alt={title} width='100%' height='300' imageStyle={{ objectFit: 'contain' }} />
                    <h6 className='absolute top-0 right-0 bg-purple-700 py-1 px-2 border-round-md'>⭐ {rating.rate}</h6>
                    <h3 className='mb-0 white-space-nowrap overflow-hidden text-overflow-ellipsis'>{title}</h3>
                    <h6 className='mt-0 text-blue-400 uppercase'>{category}</h6>
                    <h2 className='mb-0'>$ {price}</h2>
                </div>
            </Card>
        </>
    );
}
 
export default ProductCard;