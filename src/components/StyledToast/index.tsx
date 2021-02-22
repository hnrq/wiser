import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';

export default styled(ToastContainer).attrs({
  className: 'toast-container',
  toastClassName: 'toast',
  bodyClassName: 'body',
  progressClassName: 'progress',
})`
  .Toastify__toast--error {
    background: ${({ theme }) => theme.colors.red};
  }
`;