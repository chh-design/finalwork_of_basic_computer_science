import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import Page4 from './components/Page4'
import Page5 from './components/Page5'
import Root from './components/Root'

export default
{
    routes:
    [
        {path:'/root', component:Root},
        {path:'/page1', component:Page1},
        {path:'/page2', component:Page2},
        {path:'/page3', component:Page3},
        {path:'/page4', component:Page4},
        {path:'/page5', component:Page5},
        {path:'*', redirect:'/root'}
    ]
}