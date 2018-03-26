import React, {Component, PropTypes} from 'react';

class MessageList extends Component {
    constructor(props) {
        super(props);
        this.renderColumns = this.renderColumns.bind(this);
        this.renderContent = this.renderContent.bind(this);
    }
    renderColumns(cols){
        return (cols || []).map((item,index) => {
            return (<tr>
                <td>{index}</td>
                <td>{item}</td>
            </tr>)}
        )
    }
    renderContent() {
        let {data} = this.props;
        return (data || []).map(item => {
           return (<div>
                    <span>{item.name}</span>
                    <table className="table">
                        <tr>
                            <th>ID</th>
                            <th>Column Name</th>
                        </tr>
                        {this.renderColumns(item.columns)}
                    </table>
                </div>)
           })
    }

    render() {
        return (<div>{this.renderContent()}</div>);
    }
}

MessageList.propTypes = {};

export default MessageList;
