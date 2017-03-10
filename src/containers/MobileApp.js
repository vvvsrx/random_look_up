import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import MobilePage from "../page/MobilePage";
import * as FetchAction from "../actions/fetch";
import * as MobileAction from "../actions/mobile";

function mapDispatchToProps(dispatch) {
  return bindActionCreators({...MobileAction,...FetchAction},dispatch);
//   return {
//     textInputChange: obj => dispatch(MobileAction.changeText(obj.text)),
//     getData: () => dispatch(MobileAction.search())
//   };
}

function mapStateToProps(state) {
  return {
    mobile: state.mobile,
    fetch:state.fetch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MobilePage);
