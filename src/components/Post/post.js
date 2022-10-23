import './postStyles.css'
import { FiMoreHorizontal, FiSend } from 'react-icons/fi';
import { IoMdHeartEmpty } from 'react-icons/io'
import { BsChat, BsBookmark, BsEmojiSmile } from 'react-icons/bs'
import { IconContext } from 'react-icons';

export function Post() {
    return (
        <>
            <header className='headerPost'>
                <div className="infoPost">
                    <img className='imgpostHeader' src="https://pbs.twimg.com/profile_images/1452840161876791296/keD-O4Fq_400x400.jpg" />

                    <p>100_clubismo</p>
                </div>
                <FiMoreHorizontal />
            </header>

            <div className='imgPost'>
                <img src='https://pbs.twimg.com/media/FPs_mkUXoAgSDQw.jpg:large' />
            </div>

            <div className='footerPost'>
                <IconContext.Provider value={{ size: '30px' }}>
                    <section className='interaction'>
                        <div className='icons-1'>
                            <div className='icon'><IoMdHeartEmpty /></div>
                            <div className='icon'><BsChat /></div>
                            <div className='icon'><FiSend /></div>
                        </div>

                        <div className='icon'><BsBookmark /></div>
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

                <div className='comment'>
                    <div className='fakeComment'>
                        <IconContext.Provider value={{ size: '25px' }}>
                            <div className='icons'>
                                <BsEmojiSmile />
                            </div>
                        </IconContext.Provider>
                        <input placeholder='Adicione um comentário...' />
                    </div>
                    <button>Publicar</button>
                </div>

            </div>

            {/* Post 2 */}
            
            <header className='headerPost'>
                <div className="infoPost">
                    <img className='imgpostHeader' src="https://pbs.twimg.com/profile_images/1567164283896602625/HB36ws5h_400x400.jpg" />

                    <p>landonorris</p>
                </div>
                <FiMoreHorizontal />
            </header>

            <div className='imgPost'>
                <img src='https://pbs.twimg.com/media/E2KH6e3WQAAt24-?format=jpg&name=900x900' />
            </div>

            <div className='footerPost'>
                <IconContext.Provider value={{ size: '30px' }}>
                    <section className='interaction'>
                        <div className='icons-1'>
                            <div className='icon'><IoMdHeartEmpty /></div>
                            <div className='icon'><BsChat /></div>
                            <div className='icon'><FiSend /></div>
                        </div>

                        <div className='icon'><BsBookmark /></div>
                        <div>

                        </div>
                    </section>

                </IconContext.Provider>

                <section className='like'>
                    <span>450.326 curtidas</span>
                </section>

                <div className='caption'>
                    <p>
                        <strong>landonorris</strong> P3 in monaco baby!! Let's GO :)
                    </p>
                </div>

                <div className='timing'>
                    <time>Há 25min</time>
                </div>

                <div className='comment'>
                    <div className='fakeComment'>
                        <IconContext.Provider value={{ size: '25px' }}>
                            <div className='icons'>
                                <BsEmojiSmile />
                            </div>
                        </IconContext.Provider>
                        <input placeholder='Adicione um comentário...' />
                    </div>
                    <button>Publicar</button>
                </div>

            </div>
            
            {/* Post 3 */}
            
            <header className='headerPost'>
                <div className="infoPost">
                    <img className='imgpostHeader' src="https://pbs.twimg.com/profile_images/1511954192516136962/gzQbZUxu_400x400.jpg" />

                    <p>maxVerstappen1</p>
                </div>
                <FiMoreHorizontal />
            </header>

            <div className='imgPost'>
                <img src='https://amazonasatual.com.br/wp-content/uploads/2022/08/Max-venceu-o-GP-da-Belgica-Foto-Reproducao-Instagram-687x533.png' />
            </div>

            <div className='footerPost'>
                <IconContext.Provider value={{ size: '30px' }}>
                    <section className='interaction'>
                        <div className='icons-1'>
                            <div className='icon'><IoMdHeartEmpty /></div>
                            <div className='icon'><BsChat /></div>
                            <div className='icon'><FiSend /></div>
                        </div>

                        <div className='icon'><BsBookmark /></div>
                        <div>

                        </div>
                    </section>

                </IconContext.Provider>

                <section className='like'>
                    <span>1.750.994 curtidas</span>
                </section>

                <div className='caption'>
                    <p>
                        <strong>maxVerstappen1</strong> 2x WORLD CHAMPION OMG!!! thnks @redbullf1 for all the suport this year and @checoperez to help me today! Let's celebrate!!!
                    </p>
                </div>

                <div className='timing'>
                    <time>Há 2 dias</time>
                </div>

                <div className='comment'>
                    <div className='fakeComment'>
                        <IconContext.Provider value={{ size: '25px' }}>
                            <div className='icons'>
                                <BsEmojiSmile />
                            </div>
                        </IconContext.Provider>
                        <input placeholder='Adicione um comentário...' />
                    </div>
                    <button>Publicar</button>
                </div>

            </div>
             {/* Post 4 */}
            
             <header className='headerPost'>
                <div className="infoPost">
                    <img className='imgpostHeader' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxZx_qucGU13ReM2FFV-kKHwvpL5qlRuxp-zQ2XORnzggMeK_Oxip9rnkxhLaXxQawYXU&usqp=CAU" />

                    <p>formula1</p>
                </div>
                <FiMoreHorizontal />
            </header>

            <div className='imgPost'>
                <img src='https://www.minhatorcida.com.br/wp-content/uploads/2022/07/Carlos-Sainz-GP-da-Inglaterra.jpg' />
            </div>

            <div className='footerPost'>
                <IconContext.Provider value={{ size: '30px' }}>
                    <section className='interaction'>
                        <div className='icons-1'>
                            <div className='icon'><IoMdHeartEmpty /></div>
                            <div className='icon'><BsChat /></div>
                            <div className='icon'><FiSend /></div>
                        </div>

                        <div className='icon'><BsBookmark /></div>
                        <div>

                        </div>
                    </section>

                </IconContext.Provider>

                <section className='like'>
                    <span>2.120.994 curtidas</span>
                </section>

                <div className='caption'>
                    <p>
                        <strong>formula1</strong> CARLOS SAINZ ON POLE!! <br></br>He takes P1 for Sunday.
                    </p>
                </div>

                <div className='timing'>
                    <time>Há 1 hora</time>
                </div>

                <div className='comment'>
                    <div className='fakeComment'>
                        <IconContext.Provider value={{ size: '25px' }}>
                            <div className='icons'>
                                <BsEmojiSmile />
                            </div>
                        </IconContext.Provider>
                        <input placeholder='Adicione um comentário...' />
                    </div>
                    <button>Publicar</button>
                </div>

            </div>
        </>

    );
}