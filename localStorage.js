let forms = document.forms

let formBook = forms.book
let formBookName = formBook.elements.name
let formBookAuthor = formBook.elements.author
let formBookImg = formBook.elements.img
let formBookDescription = formBook.elements.description
let formBookSubmit = formBook.elements.submit

let books = []

formBook.addEventListener('submit', addBook)

function addBook(e) {
	e.preventDefault()

	let book = {
		name: formBookName.value,
		author: formBookAuthor.value,
		// description: formBookDescription.value,
		src: changImg()
	}
	if (localStorage.length > 0) {
		books = JSON.parse(localStorage.newBooks)
	}
	books.push(book)
	localStorage.setItem('newBooks', JSON.stringify(books))
	this.reset()
}

const img = document.querySelector('.preview__img')

formBookImg.onchange = changImg

function changImg(e) {
	let target = formBookImg

	if (!FileReader) {
		console.log('FileReader не поддерживается — облом')
		return
	}

	if (!target.files.length) {
		console.log('Ничего не загружено')
		return
	}

	let fileReader = new FileReader()
	fileReader.onload = () => (img.src = fileReader.result)
	fileReader.readAsDataURL(target.files[0])
	return img.src
}

img.addEventListener('click', (e) => {
	e.preventDefault()
	formBookImg.click()
})

let DB1 = {
	name: 'Чернокнижник в Мире Магов',
	author: 'Неизвестно',
	description:
		'Что происходит, когда учёный из мира будущего перерождается в мире магии и рыцарей? Шикарный ГГ — вот что происходит! Цель учёного — исследовать секреты Вселенной, и именно этим начинает заниматься Лейлин после своей реинкарнации. Мрачный, холодный и расчётливый, он использует все ресурсы и возможности ради продвижения к своей цели. Уважение? Кому это нужно? Хммм... Этот парень кажется слишком сильным для меня... Мне лучше затаиться. Ты хочешь моей помощи? Конечно, но... какая мне польза с этого? Никакой? Пока-пока... А этот парень, похоже, в будущем может принести проблемы. Лучше убить его прежде, чем он станет проблемой.',
	src: '/img/book 1.jpg'
}
let DB2 = {
	name: 'Кровавый;Триггер',
	author: 'Неизвестно',
	description: `Увижу ли я завтра рассвет?
Хороший вопрос, но ответа нет.
Только твоя душа увидит свет.
Любил тебя и ходил кругами.
Хорошая пара! -твердили все.
Не ожидая, такой подставы
Готов был я, но не судьба.
Жизнь будто бесконечная петля.
Крутится всë туда-сюда.
Ты-Морально убитое дитя.
Золотое сердце и отравленная душа.
Даже такой, я любил тебя...
Стыд и срам, горя от ума.
Стоя напротив бездны,
Твердил себе я...`,
	src: '/img/book 2.jpg'
}
let DB3 = {
	name: 'Система улучшения уровня бога',
	author: 'Неизвестно',
	description:
		'После того как я получу еще десять уровней, я смогу раскрыть свой генный замок и уничтожить эту чертову планету! Переродившись в будущем, в теле отброса в колледже, в мире, где сосуществуют зомби и гигантские звери, Линь Сю случайно получает систему совершенствования, превосходит пределы человеческого тела и поглощает звездное небо!',
	src: '/img/book 3.jpg'
}

let DB4 = {
	name: 'Звездный Странник',
	author: 'Неизвестно',
	description:
		'Огромная вселенная с бесконечными расами! Невероятные боевые навыки и захватывающие сражения! Загадочные древние семьи со своими рейтингами сильнейших.С этого момента я называю себя Звездный Странник!Синопсис: Когда люди впервые в 2200 году ступили на Нептун, их первой находкой стала рукоять меча и мертвец!',
	src: '/img/book 4.jpg'
}

let DB5 = {
	name: 'Обезумевшие души',
	author: 'Неизвестно',
	description:
		'Это рассказ о ребятах, что решили расслабиться в летние каникулы. Им хотелось свободы и развлечения, но странная местность и внезапно найденная девушка с охотником на перевес переворачивают их мнение кардинально. И теперь, вместо обыкновенного отдыха им суждено попасть с глобальные события ,что могут решить даже судьбу мира.',
	src: '/img/book 5.jpg'
}
let DB6 = {
	name: 'И ГРЯНУТ СКАЗКИ',
	author: 'Неизвестно',
	description:
		'Шёл три тысячи четвёртый год с вознесения Нелла Рея, древнего существа, провозгласившего себя единственным божеством. В самых мрачных уголках нашего самого тривиального мира, среди темнейших его обитателей, ещё живы слабые сказания, гласящие о существе не менее древнем чем сам господь. В мире без меча и магии, где чудо происходит раз в несколько сотен лет, а рассказы о толике сверхъестественного находятся под строжайшим запретом и нещадно искореняются церковью, в этом сером бытие, даже дети знают о Дьяволе, что заточён где-то глубоко в Аду вот уже почти три тысячи лет.',
	src: '/img/book 6.jpg'
}

function addDB(...arr) {
	if (!localStorage.length) {
		for (let i = 0; i < arr.length; i++) {
			books.push(arr[i])
		}
		localStorage.newBooks = JSON.stringify(books)
	}
}
addDB(DB1, DB2, DB3, DB4, DB5, DB6)
