<template>
    <div>
        <button @click="grantedPermission">弹出消息</button>
    </div>
</template>
<script type="text/javascript">
export default {
    data() {
        return {
            number: 0,
        }
    },
    created() {
        // 判断浏览器是否支持Notification
        if (window.Notification) {
            switch (Notification.permission) {
                case 'default':
                    this.defaultPermission();
                    break;
                case 'granted':
                    this.grantedPermission();
                    break;
                case 'denied':
                    alert('用户拒绝该网站消息通知');
                    break;
            }
        } else {
            alert('暂不支持消息通知');
        }
    },
    methods: {
        /**
         * [defaultPermission 当用户拒绝消息通知时，可以询问用户是否开启消息通知]
         * @Author   stonehe
         * @modifier stonehe
         * @version  [1.0]
         */
        defaultPermission() {
            Notification.requestPermission().then(permission => {
                switch (permission) {
                    case 'default':  
                        break;
                    case 'granted':
                        this.grantedPermission();
                        break;
                    case 'denied':
                        alert('用户还是拒绝了该网站消息通知');
                        break;
                }
            });
        },
        /**
         * [grantedPermission 运行消息通知状态，可以向发起消息通知]
         * @Author   stonehe
         * @modifier stonehe
         * @version  [1.0]
         */
        grantedPermission() {
            const title = '这是自定义消息通知';
            const options = {
                body: 'body：字符串。通知的body内容。',
                dir: 'auto',
                icon: 'http://cdn.duitang.com/uploads/item/201410/21/20141021130151_ndsC4.jpeg',
                data: { m: 1}
            };
            const notification = new Notification(title, options);
            var m = Object.getOwnPropertyDescriptor(notification.body); console.log(m);
            notification.onclick = e => {
                alert(1);
            }
            notification.onclose = e => {
                alert(2);
            }
            notification.onshow = e => {
                alert(3);
            }
            notification.onerror = e => {
                alert(4);
            }
        }
    }
}
</script>