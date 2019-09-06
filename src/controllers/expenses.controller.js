export default class ExpensesController {

    view(req, res) {
        res.send('View')
    }

    list(req, res) {
        res.send('List')
    }

    create(req, res) {
        res.send('Create')
    }

    update(req, res) {
        res.send('Update')
    }

    delete(req, res) {
        res.send('Delete')
    }

}