const info = [
    {
        code: `const name = "Muhammed Ibrahim"`
    },
    {
        code: `let personalInfo = {
    email: "muhammed.ibrahim.me@gmail.com",
    mobile: "01025075652",
    address: "Cairo, Egypt."
}`
    },
    {
        code: `let experienceInYears = {
    amateur: 2,
    professional: 1
}`
    },
    {
        code: `let companies = [
    'Whipix',
    'Business Boomers'
]`
    },
]

const languages = [
    {
        title: 'break',
        phase: 'Pre-Profession'
    },
    {
        title: 'Blade (Laravel templating engine)',
        language: 'php',
        code: `

 foreach ($users as $user)
    @if ($user->type == 1)
        @continue
    @endif

    <li>{{ $user->name }}</li>

    @if ($user->number == 5)
        @break
    @endif
 @endforeach
         `
    },
    {
        title: 'jQuery',
        language: 'jQuery',
        code: `

 $('#navbar').appendChild(menu);

 $.ajax({
    type: 'POST',
    url: "/users",
    data: "id=3",
    success: function (data) {
      alert("Success: " + data);
    },
 });
         `
    },
    {
        title: 'break',
        phase: 'Profession'
    },
    {
        title: 'ES5',
        language: 'javascript',
        code: `

 var arr = ['vanillajs', 'is', 'plain', 'js'];
 arr = arr.map(function (word) {
    return word.toUpperCase();
 });
 arr = arr.join(' ');
         `
    },
    {
        title: 'Angular 4+',
        language: 'javascript',
        code: `

 @Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
 })
 export class HeaderComponent implements OnInit {}
         `
    },
    {
        title: 'Ionic 3',
        language: 'html',
        code: `

 <ion-item>
    <ion-icon name="logo-twitter" item-start></ion-icon>
    Followers
    <ion-badge item-end>260k</ion-badge>
 </ion-item>
         `
    },
    {
        title: 'ES6',
        language: 'javascript',
        code: `

 let arr = ['vanillajs', 'is', 'plain', 'js'];
 arr = arr.map(word => word.toUpperCase()).join(' ');
         `
    },
    {
        title: 'React',
        language: 'javascript',
        code: `

 import React, { useState } from 'react'
 import Logo from '../logo/logo.jsx'
 import './header.css'

 const Header = props => {
    const [showLogo, setShowLogo] = useState(true)
    if (!props.showLogo) setShowLogo(false)

    return (
        <header id="header">
            {showLogo && <Logo />}
            <nav></nav>
        </header>
    )
 }

 export default Header
         `
    },
]

const tools = ['../assets/tools/webpack.png', '../assets/tools/sass.svg', '../assets/tools/babel.png', '../assets/tools/gulp.png', '../assets/tools/git.png', '../assets/tools/github.png']

const learning = ['../assets/toLearn/vuejs.png', '../assets/toLearn/nodejs.png', '../assets/toLearn/jasmine.svg', '../assets/toLearn/polymers.png']

const rLearning = ['C Lang.', 'Discrete Math', 'Dessign Patterns', 'Data Structure', 'Algorithms']

const projects = [
    {title: 'Playground', link: 'https://mibrahim-resume.firebaseapp.com/playground'},
    {title: 'Interview Task', link: 'https://frontend-resume-1.firebaseapp.com'},
    {title: 'Hanagoeslocal', link: 'https://hanagoeslocal.com/shop'},
    {title: 'Ma3arij', link: 'http://www.ma3arij.com'}
]

export {languages, info, tools, learning, rLearning, projects}