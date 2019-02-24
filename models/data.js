const info = [
    {
        code: `const name = "Muhammed Ibrahim"`
    },
    {
        code: `const personalInfo = {
    email: "muhammed.ibrahim.me@gmail.com",
    mobile: "01025075652",
    address: "Cairo, Egypt."
}`
    },
    {
        code: `const experienceInYears = {
    amateur: 1,
    professional: 1,
    total: this.amateur + this.professional
}`
    },
    {
        code: `const companies = [
    'Whipix',
    'Business Boomers'
]`
    },
]

const headlines = [
    {id: 'history', content: 'How I Coded Along The Past 2 Years'},
    {id: 'tools', content: 'Helping Tools'},
    {id: 'learning', content: 'Currently Learning'},
    {id: 'rLearning', content: 'Recursively Learning'},
    {id: 'portfolio', content: 'Some Projects and Contributions'},
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
    {
        title: 'Vue.js',
        language: 'javascript',
        code: `
 const App = new Vue({
    el: '#app',
    store,
    data: {
        products: [],
    },
    components: {
        'product-card': productCard,
        'product-details': productDetails,
    },
    created() {
        this.$http
        .get('https://reqres.in/api/products/3')
        .then(response => {
            this.products = response.data
        })
    },
    computed: {
        selectedProduct() {
        return this.$store.state.selectedProduct
        }
    }
 })
         `
    },
]

const tools = ['../assets/tools/webpack.png', '../assets/tools/gulp.png', '../assets/tools/babel.png', '../assets/tools/sass.svg', '../assets/tools/vuex.png', '../assets/tools/git.png', '../assets/tools/github.png']

const learning = ['../assets/toLearn/jasmine.svg', '../assets/toLearn/nodejs.png', '../assets/toLearn/polymers.png']

const rLearning = ['C Lang.', 'Discrete Math', 'Dessign Patterns', 'Data Structure', 'Algorithms']

const projects = [
    {title: 'Playground', link: 'https://mibrahim-resume.firebaseapp.com/playground'},
    {title: 'Interview Task', link: 'https://frontend-resume-1.firebaseapp.com'},
    {title: 'Hanagoeslocal', link: 'https://hanagoeslocal.com/shop'},
    {title: 'Ma3arij', link: 'http://www.ma3arij.com'},
    {title: 'Filteration Task', link: 'https://gitmibrahim.github.io/fly365-code-challenge/src/index.html'}
]

export {headlines,languages, info, tools, learning, rLearning, projects}