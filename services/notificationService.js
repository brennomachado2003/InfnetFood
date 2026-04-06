import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export const notificationService = {
  requestPermission: async () => {
    const {status: existingStatus} = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    
    if (finalStatus !== 'granted') {
      console.log('Falha ao obter permissão para notificações!');
      return false;
    }
    return true;
  },

  enviarNotificacaoLocal: async (title, body, data = {}) => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: title || "Aviso",
        body: body || "Notificação do InfnetFood",
        data: data,
      },
      trigger: null,
    });
  }
}