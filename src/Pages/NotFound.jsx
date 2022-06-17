import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <>
      <div class="page-other__bg">
        <img src="img/image 6.png" alt=""/>
      </div>
      <div class="container page-other page-error">
        <h1 class="page-error__title">Похоже, такой страницы нет</h1>
        <Link class="btn" to="/">Вернуться на главную</Link>
      </div>
    </>
  )
}

export default NotFound
