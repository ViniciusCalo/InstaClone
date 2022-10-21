import './postStyles.css'
import { FiMoreHorizontal, FiSend } from 'react-icons/fi';
import { IoMdHeartEmpty } from 'react-icons/io'
import { BsChat, BsBookmark } from 'react-icons/bs'
import { IconContext } from 'react-icons';

export function Post() {
    return (
        <>
            <header>
                <div className="infoPost">
                    <img src="https://pbs.twimg.com/profile_images/1452840161876791296/keD-O4Fq_400x400.jpg" />

                    <p>100_clubismo</p>
                </div>
                <FiMoreHorizontal />
            </header>

            <div className='imgPost'>
                <img src='https://pbs.twimg.com/media/FPs_mkUXoAgSDQw.jpg:large' />
            </div>

            <div className='footerPost'>
                <IconContext.Provider value={{size:'30px'}}>
                    <section className='interaction'>
                        <div className='icons-1'>
                            <div className='icons'><IoMdHeartEmpty /></div>
                            <div className='icons'><BsChat /></div>
                            <div className='icons'><FiSend /></div>
                        </div>

                        <div className='icons'><BsBookmark /></div>
                        <div>

                        </div>
                    </section>

                </IconContext.Provider>

                <section className='like'>
                     <span>810 curtidas</span>
                </section>

                <div className='caption'>
                    <p>
                        <strong>100_clubismo</strong> O melhor jogador do Mundo, Karim Benzema, figura entre os maiores artilheiros em atividade. Confira.
                    </p>
                </div>

                <div className='timing'>
                    <time>Há 2 horas</time>
                </div>
            </div>
        </>

    );
}