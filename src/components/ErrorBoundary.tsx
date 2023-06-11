/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.info(error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return <div>fallback</div>;
    }

    return this.props.children;
  }
}
