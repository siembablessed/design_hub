import './table.css';

function Table() {
    return (
        <div class="table-container">
        <table class="responsive-table">
            <thead>
                <tr>
                    <th>Services</th>
                    <th>Prices</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Websites Design</td>
                    <td>$200</td>
                </tr>
                <tr>
                    <td>App Development</td>
                    <td>$150</td>
                </tr>
                <tr>
                    <td>Logo Design</td>
                    <td>$150</td>
                </tr>
                <tr>
                    <td>Business Card Design</td>
                    <td>$250</td>
                </tr>
                <tr>
                    <td>Flyer Design</td>
                    <td>$350</td>
                </tr>
                <tr>
                    <td>Banner Design</td>
                    <td>$250</td>
                </tr>
            </tbody>
        </table>
    </div>
    );
}

export default Table;
