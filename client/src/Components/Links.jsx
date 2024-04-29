import { FaAngleRight } from 'react-icons/fa6';

function Links({ link }) {
  return (
    <div className="flex justigy-between gap-1" style={{ fontSize : "12px" }}>
    <div className="blog">Blog</div>
    <FaAngleRight className='mt-1'/>
    <div style={{ color : "#3E323280" }}>{link}</div>
    </div>
  )
}


export default Links