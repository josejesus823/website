import style from './IconsComponent.module.css'
const IconsComponent = () => {
  return (
    <>
    <div className={style.icons}>
        <a href="https://www.instagram.com/josejv30/" target='_blank'><i className='ri-instagram-line'></i></a>
        <a href="https://wa.me/573005663210" target='_blank'><i className='ri-whatsapp-line'></i></a>
        <a href="https://github.com/josejesus823" target='_blank'><i className='ri-github-fill'></i></a>
    </div>
    </>
  )
}
export default IconsComponent