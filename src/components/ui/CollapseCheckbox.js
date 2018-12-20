import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import Collapse from "@material-ui/core/Collapse";

class CollapseCheckbox extends Component {
  state = {
    open: false,
    checked: []
  };

  componentDidMount = () => {
    const initState = this.props.initState;
    this.setState({ open: initState });
  };

  handleClick = () => {
    const open = !this.state.open;
    this.setState({ open });
  };

  handleAngel = () =>
    this.state.open ? (
      <i className="fas fa-angle-up" />
    ) : (
      <i className="fas fa-angle-down" />
    );

  handleToggle = id => {
    const checked = [...this.state.checked];
    const currentIndex = checked.indexOf(id);

    if (currentIndex === -1) checked.push(id);
    else checked.splice(currentIndex, 1);
    console.log(checked);
    this.setState({ checked });
  };

  renderList = () =>
    this.props.list
      ? this.props.list.map(value => (
          <ListItem key={value._id} style={{ padding: "10px 0" }}>
            <ListItemText primary={value.name} />
            <ListItemSecondaryAction>
              <Checkbox
                color="primary"
                onChange={this.handleToggle.bind(this, value._id)}
                checked={
                  this.state.checked.indexOf(value._id) !== -1 ? true : false
                }
              />
            </ListItemSecondaryAction>
          </ListItem>
        ))
      : null;

  render() {
    return (
      <div className="collapse_items_wrapper">
        <List style={{ borderBottom: "1px solid #dbdbdb" }}>
          <ListItem
            onClick={this.handleClick}
            style={{ padding: "10px 23px 10px 0" }}
          >
            <ListItemText
              primary={this.props.title}
              className="collapse_title"
            />
            {this.handleAngel()}
          </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {this.renderList()}
            </List>
          </Collapse>
        </List>
      </div>
    );
  }
}

export default CollapseCheckbox;
