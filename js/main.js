let app = new Vue ({
  el: '#app',
  data: {
    // ディスプレイの初期設定
    output: '0',
    numbers: [
      ['7','8','9','/'],
      ['4','5','6','*'],
      ['1','2','3','-'],
      ['0','.','=','+']
    ]
  },
  methods: {
    calc: function(cmd) {
      // =押されたら計算
      if (cmd === '=') {
        this.output = eval(this.output) 
      }
      // C押されたらクリア
      else if (cmd === 'C') {
        this.output = ''
      }
      // ディスプレイが0の時は’.’以外なら0消える
      else if (this.output === '0' && !(cmd === '.')) {
        this.output = cmd
      }
      // それ以外は数字を足していく
      else {
        this.output += cmd
      }
    }
  }
})