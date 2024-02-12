import './Card.scss';

export const Card = ({ id, image, imageAlt, caption }: { id: string, image: string, imageAlt: string, caption: string }) => {
    return (
        <article className="card">
            <figure tabIndex={1}>
                <img aria-describedby={`card-caption-${caption}-${id}`} src={image} alt={imageAlt} />
                <figcaption id={`card-caption-${caption}-${id}`}>{caption}</figcaption>
            </figure>
        </article>
    )
}