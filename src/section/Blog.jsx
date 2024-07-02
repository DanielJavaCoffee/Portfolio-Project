import style from './Blog.module.css'
import Card from '../elements/CardBlogs'

function Blog(){
    return (
        <div className={style.blog} id='Blog'>
            <h2>Blog</h2>


            <div  className={style.container}>
                <div>
                <  Card 
                        title={'Making a design system from scratch'} 
                        date={'09/05/2000'} 
                        translation={'Design, Pattern'}
                        text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
                    ></Card>
                </div>

                <div>
                    <Card 
                        title={'Making a design system from scratch'} 
                        date={'09/05/2000'} 
                        translation={'Design, Pattern'}
                        text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
                    ></Card>
                </div>
            </div>
        </div>
    )
}

export default Blog