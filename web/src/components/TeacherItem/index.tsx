import React from 'react'

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import './style.css'

export const TeacherItem = () => {
  return (
        <article className="teacher-item">
          <header>
            <img
              src="https://avatars1.githubusercontent.com/u/38498198?s=460&u=fe8e7193cea5e99d5258dda34784752d159a4793&v=4"
              alt="Profile image"
            />
            <div>
              <strong>Bill Pereira</strong>
              <span>DevOps</span>
            </div>
          </header>
          <p>
            Entusiasta de tecnologias Z
            <br />
            <br />
            Apaixonado por ferramentas open source para IBM Z
          </p>
          <footer>
            <p>
              Preço/hora <strong>R$120,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="whatsapp" />
              Entrar em contato
            </button>
          </footer>
        </article>
  )
}
