import { ToastAndroid, Platform, Alert} from 'react-native';

export enum ToastType {
    SHORT = 0,
    LONG = 1,
    TOP = 2,
    BOTTOM = 3,
    CENTER = 4,

}
export function notifyMessage(msg: string,type:ToastType) {
  if (Platform.OS === 'android') {
    switch (type) {
        case ToastType.SHORT:
            ToastAndroid.show(msg, ToastAndroid.SHORT)
            break;
        case ToastType.LONG:
            ToastAndroid.show(msg, ToastAndroid.LONG)
            break;
        case ToastType.TOP:
            ToastAndroid.showWithGravity(msg, ToastAndroid.TOP, ToastAndroid.SHORT)
            break;
        case ToastType.BOTTOM:
            ToastAndroid.showWithGravity(msg, ToastAndroid.BOTTOM, ToastAndroid.SHORT)
            break;
        case ToastType.CENTER:
            ToastAndroid.showWithGravity(msg, ToastAndroid.CENTER, ToastAndroid.SHORT)
            break;
    }
  } else {
    Alert.alert(msg);
  }
}

export function handelLoginError(ERROR: string,message: string='somthing went wrong') {
    switch (ERROR) {
        case 'auth/user-not-found':
            notifyMessage('User Not Found',ToastType.LONG);
            alert('User Not Found');
            break;
        case 'auth/wrong-password':
            notifyMessage('Wrong Password',ToastType.LONG);
            alert('Wrong Password');
            break;
        case 'auth/invalid-email':
            notifyMessage('Invalid Email',ToastType.LONG);
            alert('Invalid Email');
            break;
        case 'auth/too-many-requests':
            notifyMessage('Too Many Requests',ToastType.LONG);
            alert('Too Many Requests');
            break;
        case 'auth/invalid-credential':
            notifyMessage('Invalid Credential',ToastType.LONG);
            alert('Invalid Credential');
            break;    
        case 'auth/email-already-in-use':
            notifyMessage('Email Already In Use, Try Another Email',ToastType.LONG);
            alert('Email Already In Use, Try Another Email');
            break;    
        default:
            const extractedMessage = message.split(' (')[0].replace('Firebase: ', '');
            notifyMessage(extractedMessage,ToastType.LONG);
            alert(extractedMessage);
            break;
    }

}