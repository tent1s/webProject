let menuToggle = document.querySelector('#menu-toggle');
let menu = document.querySelector('.sidebar');

const regExpValidEmail = /^\w+@\w\.\w{2,}$/;

const loginElem= document.querySelector(    '.login');
const loginForm= document.querySelector('.login-form');
const emailInput= document.querySelector('.login-email');
const passwordInput= document.querySelector('.login-password');
const loginSignup= document.querySelector('.login-signup');
const userElem= document.querySelector('.user');
const userNameElem = document.querySelector('.user-name');
const exitElem = document.querySelector('.exit');
const editElem = document.querySelector('.edit');
const editContainer = document.querySelector('.edit-container');

const editUsername = document.querySelector('.edit-username');
const editPhotoURL = document.querySelector('.edit-photo');
const userAvatarElem =document.querySelector('.user-avatar');
const postsWrapper =document.querySelector('.posts');
const buttonNewPost =document.querySelector('.button-new-post');
const sidebarNav = document.querySelector('.sidebar-nav');
const addPostElem = document.querySelector('.add-post');
const listUsers =[
    {
        id: '01',
        email: 'tent1s@yandex.ru',
        password: '1234',
        displayName: 'tent1s',
        photo: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/83/835dc9023132c6bff73cb4fb82d00ca3aadff08d_full.jpg'
    },
    {
        id: '02',
        email: 'rage@yandex.ru',
        password: '1234',
        displayName: 'rage'
    }
];
const setUsers ={
    user: null,
    logIn(email, password, handler){
        const user =this.getUser(email);
        if(user && user.password ===password) {
            this.autorizedUser(user)
            if(handler){
                handler();
            }
        }else{
            alert('Пользователь с таким email и паролем не найден!')
        }
    },
    logOut(handler){
        this.user =null;
        if(handler){
            handler();
        }
    },
    signUp(email, password, handler){
        if(!email.trim() || !password.trim()){
            return alert('Введите данные!')
        }
        if(!this.getUser(email)) {
            const user ={email, password, displayName:  email.slice(0, email.indexOf('@'))};
            listUsers.push(user);
            this.autorizedUser(user)
            if(handler){
                handler();
            }
        }else{
            alert('Пользователь с таким email уже найден!')
        }
    },
    editUser(userName,userPhoto='',handler){
        if(userName){
            this.user.displayName = userName;
        }
        if(userPhoto){
            this.user.photo = userPhoto;
        }
        if(handler){
            handler();
        }
    },
    getUser(email){
        return listUsers.find((item) => item.email === email)
    },
    autorizedUser(user){
        this.user = user;

    }
};
const setPosts ={
    allPost: [
        {
            title: 'Заголовок поста',
            text: 'Идейные соображения высшего порядка, а также сложившаяся структура организации позволяет оценить значение системы обучения кадров, соответствует насущным потребностям. Таким образом реализация намеченных плановых заданий требуют определения и уточнения модели развития. С другой стороны начало повседневной работы по формированию позиции в значительной степени обуславливает создание систем массового участия. Товарищи! дальнейшее развитие различных форм деятельности представляет собой интересный эксперимент проверки существенных финансовых и административных условий.',
            tags: ['свежее','новое','случайное','горячее','случайное'],
            author: {displayName: 'svetlana', photo: 'https://i11.fotocdn.net/s103/f236d9b4b422a123/gallery_xl/2181938556.jpg'},
            date: '11.11.2020, 20:54:00',
            like:45,
            comments:20,
        },
        {
            title: 'Заголовок поста',
            text: 'Таким образом новая модель организационной деятельности влечет за собой процесс внедрения и модернизации существенных финансовых и административных условий. Равным образом постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание дальнейших направлений развития. Таким образом укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Значимость этих проблем настолько очевидна, что консультация с широким активом способствует подготовки и реализации системы обучения кадров, соответствует насущным потребностям. Товарищи! дальнейшее развитие различных форм деятельности в значительной степени обуславливает создание позиций, занимаемых участниками в отношении поставленных задач. Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности играет важную роль в формировании модели развития.',
            tags: ['свежее','новое','случайное','горячее','случайное'],
            author: {displayName: 'tent1s', photo: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/83/835dc9023132c6bff73cb4fb82d00ca3aadff08d_full.jpg'},
            date: '10.11.2020, 20:54:00',
            like:11,
            comments:12,
        },
        {
            title: 'Заголовок поста',
            text: 'Кстати, тщательные исследования конкурентов лишь добавляют фракционных разногласий и описаны максимально подробно. С другой стороны, социально-экономическое развитие позволяет выполнить важные задания по разработке модели развития. С учётом сложившейся международной обстановки, понимание сути ресурсосберегающих технологий, в своём классическом представлении, допускает внедрение первоочередных требований. Как принято считать, сделанные на базе интернет-аналитики выводы функционально разнесены на независимые элементы. Каждый из нас понимает очевидную вещь: сплочённость команды профессионалов позволяет оценить значение экспериментов, поражающих по своей масштабности и грандиозности. Значимость этих проблем настолько очевидна, что сложившаяся структура организации влечет за собой процесс внедрения и модернизации глубокомысленных рассуждений.',
            tags: ['свежее','новое','случайное','горячее','случайное'],
            author: {displayName: 'svetlana', photo: 'https://i11.fotocdn.net/s103/f236d9b4b422a123/gallery_xl/2181938556.jpg'},
            date: '09.11.2020, 20:54:00',
            like:45,
            comments:20,
        },
    ],
    addPost(title,text,tags,handler){
        this.allPost.unshift({
            title,
            text,
            tags: tags.split(',').map(item=> item.trim()),
            author:{
                displayName: setUsers.user.displayName,
                photo: setUsers.user.photo,
            },
            date: new Date().toLocaleString(),
            like: 0,
            comments:0,
        })
        if(handler){
            handler();
        }
    }
};
const toggleAuthDom = () => {
    const user =setUsers.user;
    if(user) {
        loginElem.style.display = 'none';
        userElem.style.display = '';
        userNameElem.textContent = user.displayName;
        userAvatarElem.src =user.photo || userAvatarElem.src;
        buttonNewPost.classList.add('visible');
        sidebarNav.classList.add('visible');
    }else{
        loginElem.style.display = '';
        userElem.style.display = 'none';
        buttonNewPost.classList.remove('visible');
        sidebarNav.classList.remove('visible');
        addPostElem.classList.remove('visible');
        postsWrapper.classList.add('visible');
    }
};

const showAddPost = () => {
    addPostElem.classList.add('visible');
    postsWrapper.classList.remove('visible');
}

const  showPosts = () => {


    let postsHTML ='';
    setPosts.allPost.forEach(({title,text,date,tags, like,comments, author})=>{
        postsHTML += `
       <section class="post">
         <div class="post-body">
         <h2 class="post-title">${title}</h2>
             <p class="post-text">${text}</p> 
              <div class="tags">
                 ${tags.map(tag => `<a href="#" class="tag">#${tag}</a>`)};
             </div>
         </div>
         <div class="post-footer">
             <div class="post-buttons">
                 <button class="post-button likes">
                     <svg width="19" height="20" class="icon icon-like">
                     <use xlink:href="img/icons.svg#like"></use>
                     </svg>
                     <span class="likes-counter">${like}</span>
                 </button>
                 <button class="post-button comments">
                     <svg width="21" height="21" class="icon icon-comments">
                     <use xlink:href="img/icons.svg#coments"></use>
                     </svg>
                     <span class="comments-counter">${comments}</span>
                 </button>
                 <button class="post-button save">
                     <svg width="19" height="19" class="icon icon-save">
                     <use xlink:href="img/icons.svg#save"></use>
                     </svg>
                 </button>
                 <button class="post-button share">
                     <svg width="17" height="19" class="icon icon-share">
                     <use xlink:href="img/icons.svg#share"></use>
                     </svg>
                 </button>
             </div>
             <div class="post-author">
                 <div class="author-about">
                     <a href="#" class="author-username">${author.displayName}</a>
                     <span class="post-time">${date}</span>
                 </div>
                 <a href="" class="author-link"><img src=${author.photo || "img/avatar.jpg"} alt="avatar" class="author-avatar"></a>
             </div>
         </div>
     </section> 
        `;
    })
    postsWrapper.innerHTML =postsHTML;
    addPostElem.classList.remove('visible');
    postsWrapper.classList.add('visible');
};


const init =() => {
    loginForm.addEventListener('submit', event => {
        event.preventDefault();
        const emailValue = emailInput.value;
        const passwordValue =passwordInput.value;
        setUsers.logIn(emailValue, passwordValue, toggleAuthDom);
        loginForm.reset();
    });
    loginSignup.addEventListener('click', event => {
        event.preventDefault();
        const emailValue = emailInput.value;
        const passwordValue =passwordInput.value;
        setUsers.signUp(emailValue, passwordValue, toggleAuthDom);
        loginForm.reset();
    });
    exitElem.addEventListener('click', event => {
        event.preventDefault();
        setUsers.logOut(toggleAuthDom);
    });
    editElem.addEventListener('click', event => {
        event.preventDefault();
        editContainer.classList.toggle('visible');
        editUsername.value =setUsers.user.displayName;
    });
    editContainer.addEventListener('submit', event => {
        event.preventDefault();
        setUsers.editUser(editUsername.value, editPhotoURL.value, toggleAuthDom)
        editContainer.classList.remove('visible');
    });
    menuToggle.addEventListener('click', function (event){
        event.preventDefault();
        menu.classList.toggle('visible');
    });
    buttonNewPost.addEventListener('click', event =>{
        event.preventDefault();
        showAddPost();
    });
    addPostElem.addEventListener('submit',event =>{
        event.preventDefault();
        console.log(addPostElem.elements);
        const {title,text, tags} = addPostElem.elements;
        if(title.value.length< 6){
            alert('Слишком короткий заголовок');
            return;
        }
        if(title.value.length> 50){
            alert('Слишком длинный заголовок');
            return;
        }
        setPosts.addPost(title.value, text.value, tags.value,showPosts);
        addPostElem.classList.remove('visible');
        addPostElem.reset();
    });
    showPosts();
    toggleAuthDom();
}

document.addEventListener('DOMContentLoaded', () => {
    init();
});

