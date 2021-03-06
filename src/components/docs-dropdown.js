import React from 'react';
import { Link } from 'gatsby';
import onClickOutside from 'react-onclickoutside';
import styles from './docs-dropdown.module.css';
import { Transition } from 'semantic-ui-react';

class DocsDropdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      title: this.props.title
    }
  }

  handleClickOutside() {
    this.setState({
      open: false
    })
  }

  toggleList() {
    this.setState(prevState => ({
      open: !prevState.open
    }))
  }

  render() {
    const {list} = this.props;
    const {title, open} = this.state;
    return(
      <div>
        <div className={styles.container}>
          <div
            className={styles.title}
            onClick={() => this.toggleList()}
            >
            <a>{title}</a>
          </div>
        </div>
          <div className={styles.docsOptions}>
            {<ul>
              {list.map((item) => (
                <li key={item.id}><Link to={item.link}>{item.title}</Link></li>
              ))}
            </ul>}
          </div>
      </div>

    )
  }


}

export default onClickOutside(DocsDropdown);
