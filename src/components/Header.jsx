import { moneyFormat } from '../helpers'

// Object Destructuring

const header = ({total,money}) => {
  return (
    <>
    {/* Conditional Rendering - Şərtli Render */}
    {total > 0 && money-total !==0 &&(
        <div className='header'>
            Sizin Balansınız <span>{moneyFormat(money-total)} AZN təşkil edir</span>
        </div>
    )}

    {total === 0 &&(
        <div className='header'>
            Sizin Balansınız &nbsp; {moneyFormat(money)} &nbsp; {/* Non breaking space */} AZN təşkil edir
        </div>
    )}

    {money-total === 0 && (
        <div className='header empty'>
            Pulunuz bitdi, gedin pul qazanın!
        </div>
    )}

    <style jsx>
        {
            `
            .header {
                position:sticky;
                top:0;
                background: #dedede;
                height:70px;
                display:flex;
                justify-content:center;
                align-items:center;
                font-size:38px;
                letter-spacing:3px;

            }

            .header.empty{
                background:red;
                color:#fff
            }

            `
        }
    </style>
    </>
  )
}

export default header