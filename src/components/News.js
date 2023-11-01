import './News.css'

const News = (props) => {
return (
  <div className='news'>
    <p>{props.title}</p>
    <p>{props.description}</p>
  </div>
)
}

export default News