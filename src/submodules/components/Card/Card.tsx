import './Card.scss';

export const Card = ({ key, image, imageAlt, caption }: { key: string, image: string, imageAlt: string, caption: string }) => {
    return (
        <article className="card">
            <figure tabIndex={1}>
                <img aria-describedby={`card-caption-${caption}-${key}`} src={image} alt={imageAlt} />
                <figcaption id={`card-caption-${caption}-${key}`}>{caption}</figcaption>
            </figure>
        </article>
    )
}