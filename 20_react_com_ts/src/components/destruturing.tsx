import React from 'react'

interface Props{
    title: string;
    content: string;
    commentQty: number;
    tags: string[];

    category: Category;
}
// 8 - enum

export enum Category{
    JS = "javascript",
    TS = "typescript",
    P = "Python",
}

const destruturing = ({title, content,commentQty,tags, category}: Props) => {
  return (
    <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <p>Quantidade de comentários: {commentQty}</p>
       <div>
            {tags.map(tag => (
                <span>#{tag}</span>
            ))}

            <h4>categoria: {category}</h4>
       </div>
    </div>
  )
}

export default destruturing