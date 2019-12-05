import React from 'react';
class App extends React.Component {
  render() {
    return (
        var names = [];
    for (var i in items) {
      names.push(<SidebarItem title={items[i]} />);
    }
    return (<div className="sidebar">{names}</div>);  }
}
class SidebarItem extends React.Component {
  render() {
    return (<div className="sidebar-item">{this.props.title}</div>);  }
}

    );
  }
}
