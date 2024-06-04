import {Component} from 'react';

// 1. Mounting -> Монтирование:
//      - вызов конструктора (Constructor)
//      - static getDerivedStateFromProps
//      - вызов метода render
//      - вызов ComponentDidMount

// 2. Updating -> обновление:
//      - вызов  static getDerivedStateFromProps
//      - вызов shouldComponentUpdate (должен обновиться или нет)
//      - вызов render
//      - вызов componentDidUpdate

// 3. Unmounting
//      - вызов componentWillUnmount

// 4. Error Handling -> Ошибки
//      - вызов getDerivedStateFromError(отрисовка запасного UI)
//      - вызов componentDidCatch

// N.B. <ErrorBoundary/>  -> обработчик ошибки
// (единственный классовый компонент , который можно встраивать в проект)

export class MyClassComponent extends Component {
    // Этапы жизненного цикла компонента (у классового компонента только присутствуют)
    // State by default
    constructor(props) {
        super(props);
        this.state = {}
    }
    static getDerivedStateFromProps() {
    }
    //
    render() {
        return <div>

        </div>
    }
}