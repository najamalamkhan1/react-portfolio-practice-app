import React from 'react'
import { Link } from 'react-router-dom';
import About from './About'
import './styleSheets/Goals.css'
function Goal() {
  let myText = <h6 className='text-light text-center bg-success text-expend-l'>Read article </h6>;
  let myGoals = <p className="goal-1"> {myText} Lorem ipsut amet consectetur adipisicing elit. Iure fugiat illum quas dolore. Illo beatae magnam, assumenda omnis tenetur expedita fuga doloribus nisi voluptatum ut! Doloremque neque delectus necessitatibus repellat qui? Suscipit aspernatur dignissimos nam, veniam unde cum numquam quos labore atque sed optio dolorem odio praesentium cumque vitae aliquid earum illum enim amet, mollitia, magnam iusto. Sed animi iusto sint vero nihil nam illo rerum eius sapiente, quisquam veritatis repellat velit praesentium temporibus accusantium natus distinctio officiis. Repellendus nisi cupiditate ipsum soluta velit doloribus eaque, autem iusto? Molestiae quae a eveniet voluptatem vitae ea veritatis unde fugiat sapiente quidem omnis, aperiam sequi vero fuga repellat dignissimos voluptate temporibus facilis quas nihil. Placeat quidem accusamus voluptas! Numquam nisi praesentium perferendis! Necessitatibus esse, impedit autem laborum quidem itaque dicta illum est error deserunt optio voluptates placeat voluptas magnam quisquam vitae facilis nihil delectus praesentium et. Debitis repellendus soluta praesentium. Eius, maiores. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione ducimus quis provident? Temporibus maxime et beatae officia ratione, nulla eligendi!</p>
  return (
    <>
      <div className='container container-expand-sm'>
        <Link to={'ourgoal'} > <h3 className="display-2 text-dark">Our Goals</h3></Link>
        <h4 className="display-5">Research Of New Models</h4>
        {myGoals}
        <img src={"https://images.pexels.com/photos/12863111/pexels-photo-12863111.jpeg?auto=compress&cs=tinysrgb&w=600"} className={'goal-1-img'} />
        <hr />
        <h4 className="display-5">Promote IT In Schools</h4>
        {myGoals}
        <img src={"https://images.pexels.com/photos/11367438/pexels-photo-11367438.jpeg?auto=compress&cs=tinysrgb&w=600"} className={'goal-1-img'} />
        <hr />
        <h4 className="display-5">Learn Web development</h4>
        {myGoals}
        <img src={"https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?auto=compress&cs=tinysrgb&w=600"} className={'goal-1-img'} />
      </div>
      <About />
    </>
  )
}

export default Goal