import hello from './hello';

export default (app) => {
    app.use('/', hello)
}