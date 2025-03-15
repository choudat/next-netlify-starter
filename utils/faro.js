import { getWebInstrumentations, initializeFaro } from '@grafana/faro-web-sdk';
import { TracingInstrumentation } from '@grafana/faro-web-tracing';

export const initializeFaroMonitoring = () => {
  if (typeof window !== 'undefined') {
    initializeFaro({
      url: 'https://faro-collector-prod-eu-west-2.grafana.net/collect/3abd547e4c3885e566eee298c39c3623',
      app: {
        name: 'connethics-nextjs',
        version: '1.0.0',
        environment: 'production'
      },
      instrumentations: [
        ...getWebInstrumentations(),
        new TracingInstrumentation(),
      ],
    });
  }
};
