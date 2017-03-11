import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import AccountCardPage from "../page/AccountCardPage"
import * as AccountCardAction from '../actions/accountCard'
import * as FetchAction from "../actions/fetch";

function mapDispatchToProps(dispatch) {
  return bindActionCreators({...AccountCardAction,...FetchAction},dispatch);
}

function mapStateToProps(state) {
  return {
    accountCard: state.accountCard,
    fetch:state.fetch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountCardPage);