// Landing page -> Main app with fade transition
const enterBtn = document.getElementById('enterBtn');
const landing = document.getElementById('landing');
const app = document.getElementById('app');

enterBtn.addEventListener('click', () => {
  landing.classList.add('fade-out');
  setTimeout(() => {
    landing.classList.add('hidden');
    app.classList.remove('hidden');
  }, 1000); // matches CSS transition time
});

// Chart setup for WiggaLiquid (WL)
const chartDom = document.getElementById('chart');
const myChart = echarts.init(chartDom);

// Generate "going up with dips" data
let data = [];
let value = 0.01;
for (let i = 0; i < 60; i++) {
  value += (Math.random() * 0.004) - 0.001; // gentle dips
  if (value < 0.01) value = 0.01;
  data.push(value.toFixed(4));
}

const option = {
  title: {
    text: 'WL / WiggaLiquid',
    left: 'center',
    textStyle: { color: '#ff9900' }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: Array.from({length: data.length}, (_, i) => i + 1),
    axisLine: { lineStyle: { color: '#888' } }
  },
  yAxis: {
    type: 'value',
    axisLine: { lineStyle: { color: '#888' } }
  },
  series: [{
    data,
    type: 'line',
    smooth: true,
    lineStyle: { color: '#ff9900', width: 2 },
    areaStyle: { color: 'rgba(255,153,0,0.3)' }
  }],
  backgroundColor: '#1e1e1e',
  animationDuration: 2000,
  animationEasing: 'cubicOut'
};

myChart.setOption(option);

// Chat mock functionality
const chatBox = document.getElementById('chatBox');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');

sendBtn.addEventListener('click', () => {
  const msg = chatInput.value.trim();
  if (msg) {
    const p = document.createElement('p');
    p.textContent = msg;
    chatBox.appendChild(p);
    chatInput.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;
  }
});
