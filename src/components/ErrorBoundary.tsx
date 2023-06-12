/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ServiceErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ServiceErrorBoundaryState
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.info(error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return <div>error</div>;
    }

    return this.props.children;
  }
}
